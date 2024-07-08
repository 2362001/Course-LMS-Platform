"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"

const CreatePage = () => {
  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Title is required",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const router = useRouter()

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/course", values)
      if(response) {
        router.push(`teacher/courses/${response.data.id}`)
      }
    } catch {
      toast.error("Something went wrong !!!")
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your courses</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your course????
        </p>
        <Form {...form}>
          <form
            onSubmit={
              form.handleSubmit(onSubmit, () => {console.log("invalid")})
            }
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input disabled={isSubmitting} {...field} />
                  </FormControl>
                  <FormDescription>
                    What will you teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button>Cancel</Button>
              </Link>
              <Button type="submit" disabled={false}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
