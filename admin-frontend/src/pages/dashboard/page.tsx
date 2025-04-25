import { Link } from "react-router-dom";
import { AlertCircle, PlusCircle, FileQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getAllPyqs } from "@/services/api";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Pyq {
  _id: string;
  title: string;
  branch: string;
  semester: string;
  year: string;
  downloadUrl: string;
  tags: string[];
}

export default function Dashboard() {
  const [pyqs, setPyqs] = useState<Pyq[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPyqs = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getAllPyqs();
      // setPyqs(response.data.data);
    } catch (err: any) {
      console.log("Error fetching PYQs:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred please check your network connection and try again"
      );
      setPyqs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPyqs();
  }, []);

  const renderTableContent = () => {
    if (loading) {
      return (
        <TableBody>
          {[...Array(3)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-10 w-1/2" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-10 w-1/2" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-10 w-1/2" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      );
    }

    if (pyqs?.length === 0) {
      return (
        <TableBody>
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <FileQuestion className="h-8 max-w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">No PYQs found</p>
                <Link to="/new">
                  <Button size="sm" className="mt-2">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add New PYQ
                  </Button>
                </Link>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      );
    }

    return (
      <TableBody className="w-full max-w-full">
        {pyqs.map((pyq) => (
          <TableRow key={pyq._id} className="cursor-pointer hover:bg-muted/50">
            <TableCell>
              <Link to={`/pyq/${pyq._id}`} className="block w-full">
                {pyq.title}
              </Link>
            </TableCell>
            <TableCell>
              <Link to={`/pyq/${pyq._id}`} className="block w-full">
                {pyq.branch} - {pyq.semester}
              </Link>
            </TableCell>
            <TableCell>
              <Link to={`/pyq/${pyq._id}`} className="block w-full">
                {pyq.year}
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <div className="w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">
              Manage your Previous Year Questions
            </p>
          </div>
          <Link to="/new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New PYQ
            </Button>
          </Link>
        </div>

        {error && !loading && (
          <Alert variant="destructive" className="mb-4 w-full max-w-full">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>PYQ List</CardTitle>
              <CardDescription>
                View and manage all Previous Year Questions
              </CardDescription>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="search"
                placeholder="Search PYQs..."
                className="max-w-xs"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Branch - Semester</TableHead>
                  <TableHead>Year</TableHead>
                </TableRow>
              </TableHeader>
              {renderTableContent()}
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
