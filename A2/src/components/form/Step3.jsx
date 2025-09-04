import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/slices/formSlice";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { step3Schema } from "../../schemas/formSchemas";

export default function Step3({ onPrev }) {
  const dispatch = useDispatch();
  const step3Data = useSelector((state) => state.form.formData.step3);

  const form = useForm({
    resolver: zodResolver(step3Schema),
    defaultValues: step3Data,
    mode: "onChange",
  });

  useEffect(() => {
    form.reset(step3Data);
  }, [step3Data]);

  const onSubmit = (values) => {
    dispatch(updateFormData({ step: 3, data: values }));
  };

  const skillOptions = ["React", "Vue", "Node.js", "JavaScript", "TypeScript"];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        Step 3: Additional Information
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Occupation */}
          <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occupation</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your occupation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Skills */}
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <div className="flex flex-col gap-1">
                    {skillOptions.map((skill) => (
                      <label key={skill} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={skill}
                          checked={field.value.includes(skill)}
                          onChange={() => {
                            if (field.value.includes(skill)) {
                              field.onChange(
                                field.value.filter((v) => v !== skill)
                              );
                            } else {
                              field.onChange([...field.value, skill]);
                            }
                          }}
                        />
                        {skill}
                      </label>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Short Bio */}
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Bio</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a short bio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Agreement checkbox */}
          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <input type="checkbox" {...field} checked={field.value} />
                </FormControl>
                <FormLabel>I agree to the terms</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={onPrev}>
              Previous
            </Button>
            <Button type="submit" disabled={!form.formState.isValid}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
