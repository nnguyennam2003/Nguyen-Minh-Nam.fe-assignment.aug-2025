import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, nextStep } from "../../store/slices/formSlice";
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
import { step2Schema } from "../../schemas/formSchemas";

export default function Step2({ onPrev }) {
  const dispatch = useDispatch();
  const step2Data = useSelector((state) => state.form.formData.step2);

  const form = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues: step2Data,
    mode: "onChange",
  });

  useEffect(() => {
    form.reset(step2Data);
  }, [step2Data]);

  const onSubmit = (values) => {
    dispatch(updateFormData({ step: 2, data: values }));
    dispatch(nextStep());
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        Step 2: Address Information
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Country */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={onPrev}>
              Previous
            </Button>
            <Button type="submit" disabled={!form.formState.isValid}>
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
