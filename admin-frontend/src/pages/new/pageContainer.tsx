import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  formData: {
    title: string;
    branch: string;
    semester: string;
    year: string;
    downloadUrl: File | null;
    tags: string[];
  };
  loading: boolean;
  error: string;
  success: boolean;
}

// Branch options for West Bengal Polytechnic
const branchOptions = [
  "Civil Engineering",
  "Computer Science & Technology",
  "Electrical Engineering",
  "Electronics & Communication Engineering",
  "Information Technology",
  "Mechanical Engineering",
  "Metallurgical Engineering",
  "Textile Technology",
];

// Semester options
const semesterOptions = [
  "1st Semester",
  "2nd Semester",
  "3rd Semester",
  "4th Semester",
  "5th Semester",
];

// Year options
const yearOptions = [
  "1st Year",
  "2nd Year",
  "3rd Year",
];

function NewPyqContainer({
  handleSubmit,
  handleChange,
  handleSelectChange,
  formData,
  loading,
  error,
  success,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-background p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          New Previous Year Question
        </h2>
        <p className="text-muted-foreground mt-2">Enter PYQ information</p>

        <Dialog
          open={loading || success}
          onOpenChange={() => {
            if (success) {
              navigate("/");
            }
          }}
        >
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="text-center">
              <DialogTitle>
                {loading ? "Uploading..." : "Upload Successful"}
              </DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Card className="shadow-md border-0 overflow-hidden bg-background mt-6">
          <form onSubmit={handleSubmit}>
            {error && (
              <Alert variant="destructive" className="mb-6 mx-6 mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <CardContent className="pb-4 space-y-8 bg-background">
              <div>
                <h3 className="text-md font-semibold text-primary mb-4">
                  PYQ Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="title"
                      className="text-foreground font-medium"
                    >
                      Title
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Enter PYQ title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="border-input focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="branch"
                      className="text-foreground font-medium"
                    >
                      Branch
                    </Label>
                    <Select 
                      value={formData.branch} 
                      onValueChange={(value: string) => handleSelectChange("branch", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        {branchOptions.map((branch) => (
                          <SelectItem key={branch} value={branch}>
                            {branch}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator className="bg-border" />

              <div>
                <h3 className="text-md font-semibold text-primary mb-4">
                  Additional Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="semester"
                      className="text-foreground font-medium"
                    >
                      Semester
                    </Label>
                    <Select 
                      value={formData.semester} 
                      onValueChange={(value: string) => handleSelectChange("semester", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        {semesterOptions.map((semester) => (
                          <SelectItem key={semester} value={semester}>
                            {semester}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="year"
                      className="text-foreground font-medium"
                    >
                      Year
                    </Label>
                    <Select 
                      value={formData.year} 
                      onValueChange={(value: string) => handleSelectChange("year", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {yearOptions.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator className="bg-border" />

              <div>
                <h3 className="text-md font-semibold text-primary mb-4">
                  Download Information
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="downloadUrl"
                      className="text-foreground font-medium"
                    >
                      PYQ File
                    </Label>
                    <Input
                      id="downloadUrl"
                      name="downloadUrl"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleChange}
                      required
                      className="border-input focus:border-primary"
                    />
                    <p className="text-xs text-muted-foreground">
                      Accept PDF, JPG or PNG (max 5MB)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="tags"
                      className="text-foreground font-medium"
                    >
                      Tags (comma-separated)
                    </Label>
                    <Input
                      id="tags"
                      name="tags"
                      placeholder="Enter tags (e.g., important, difficult, easy)"
                      value={formData.tags.join(", ")}
                      onChange={(e) => {
                        const tags = e.target.value.split(",").map(tag => tag.trim());
                        const syntheticEvent = {
                          target: {
                            name: "tags",
                            value: tags
                          }
                        } as unknown as React.ChangeEvent<HTMLInputElement>;
                        handleChange(syntheticEvent);
                      }}
                      className="border-input focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={loading}>
                  {loading ? "Uploading..." : "Upload PYQ"}
                </Button>
              </div>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default NewPyqContainer;
