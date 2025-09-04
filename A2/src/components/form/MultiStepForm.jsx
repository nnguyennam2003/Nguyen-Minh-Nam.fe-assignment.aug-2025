import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Progress } from "@/components/ui/progress";
import { prevStep, resetForm } from "../../store/slices/formSlice";
import PreviewPDF from "../preview/PreviewPDF";

export default function MultiStepForm() {
  const step = useSelector((state) => state.form.step);
  const formData = useSelector((state) => state.form.formData);
  const progress = (step / 3) * 100;
  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleReset = () => {
    dispatch(resetForm());
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress */}
      <div className="w-full mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Step {step} of 3</span>
        </div>
        <Progress value={progress} />
      </div>

      {/* Steps */}
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 onPrev={handlePrev} />}
      {step === 3 && <Step3 onPrev={handlePrev} />}
      <div className="flex justify-center mt-4 w-full">
        <Button variant="destructive" onClick={handleReset}>
          Reset Form
        </Button>
      </div>
      <div className="mt-8 border p-4 rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold mb-4">PDF Preview</h3>
        <PreviewPDF formData={formData} />
      </div>
    </div>
  );
}
