import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Trash2, Download, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { deletePyq, getPyq } from "@/services/api";
import PyqLoading from "@/components/loading/PyqLoading";

interface Pyq {
  _id: string;
  title: string;
  branch: string;
  semester: string;
  year: string;
  downloadUrl: string;
  tags: string[];
}

export default function PyqPage() {
  const [pyq, setPyq] = useState<Pyq | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const navigate = useNavigate();
  const params = useParams();

  const handleDelete = async (id: string) => {
    setDeleting(true);
    try {
      await deletePyq(id);
      navigate("/");
    } catch (error: any) {
      setDeleteError(
        error.response?.data?.message || "Please refresh the page"
      );
    } finally {
      setDeleting(false);
    }
  };

  const fetchPyq = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getPyq(params.id as string);
      setPyq(response.data.data);
    } catch (err: any) {
      console.log("Error fetching PYQ:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred please check your network connection and try again"
      );
      setPyq(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPyq();
  }, [params.id]);

  if (loading) {
    return <PyqLoading />;
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <CardTitle className="mt-4">Unable to Load PYQ</CardTitle>
            <CardDescription>
              We encountered a problem while trying to fetch PYQ information.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button onClick={fetchPyq}>Try Again</Button>
            <Link to="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!pyq) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>PYQ Not Found</CardTitle>
            <CardDescription>
              The PYQ with ID {params.id} could not be found.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-14 items-center border-b bg-background px-6">
        <h1 className="text-lg font-medium text-foreground">PYQ Information</h1>
      </header>
      <main className="flex flex-1 flex-col gap-6 md:p-6 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h2 className="text-xl font-semibold text-foreground">
              {pyq.title}
            </h2>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Trash2 className="mr-2 h-4 w-4 text-red-500" />
                Delete
              </Button>
            </DialogTrigger>

            <DialogContent className="space-y-4">
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete the
                  PYQ record.
                </DialogDescription>
              </DialogHeader>

              {deleteError && (
                <Alert variant="destructive">
                  <AlertTitle className="text-sm font-medium">
                    {deleteError}
                  </AlertTitle>
                </Alert>
              )}

              <div className="flex justify-end space-x-2">
                <Button
                  onClick={() => handleDelete(pyq._id)}
                  variant="destructive"
                  className="min-w-25"
                  disabled={deleting}
                >
                  {deleting ? (
                    <Loader2 className="animate-spin h-4 w-4" />
                  ) : (
                    "Delete"
                  )}
                </Button>
                <DialogTrigger asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-y-4 gap-x-8 sm:grid-cols-2">
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Title
                </div>
                <div className="mt-1 text-foreground">{pyq.title}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Branch
                </div>
                <div className="mt-1 text-foreground">{pyq.branch}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Semester
                </div>
                <div className="mt-1 text-foreground">{pyq.semester}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Year
                </div>
                <div className="mt-1 text-foreground">{pyq.year}</div>
              </div>
            </div>

            {pyq.tags && pyq.tags.length > 0 && (
              <div className="mt-6">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {pyq.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <a
                href={pyq.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="mr-2 h-4 w-4" />
                  Download PYQ
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
