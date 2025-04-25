import { useState } from "react";
import { createPyq } from "@/services/api";
import NewPyqContainer from "./pageContainer";

interface FormDataType {
  title: string;
  branch: string;
  semester: string;
  year: string;
  downloadUrl: File | null;
  tags: string[];
}

export default function NewPyq() {
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    branch: "",
    semester: "",
    year: "",
    downloadUrl: null,
    tags: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      if (fileInput.files && fileInput.files[0]) {
        setFormData((prev) => ({
          ...prev,
          [name]: fileInput.files![0],
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("branch", formData.branch);
      formDataToSend.append("semester", formData.semester);
      formDataToSend.append("year", formData.year);
      if (formData.downloadUrl) {
        formDataToSend.append("downloadUrl", formData.downloadUrl);
      }
      formDataToSend.append("tags", JSON.stringify(formData.tags));

      await createPyq(formDataToSend);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create PYQ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewPyqContainer
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleSelectChange={handleSelectChange}
      formData={formData}
      loading={loading}
      error={error}
      success={success}
    />
  );
}
