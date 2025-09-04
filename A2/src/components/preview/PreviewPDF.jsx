import { PDFViewer, Document, Page, Text, View } from "@react-pdf/renderer";

export default function PreviewPDF({ formData }) {
  return (
    <PDFViewer width="100%" height={400}>
      <Document>
        <Page size="A4" style={{ padding: 20 }}>
          <View>
            <Text>Step 1: Personal Information</Text>
            <Text>Name: {formData.step1.name}</Text>
            <Text>Email: {formData.step1.email}</Text>
            <Text>Phone: {formData.step1.phone}</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text>Step 2: Address</Text>
            <Text>Country: {formData.step2.country}</Text>
            <Text>City: {formData.step2.city}</Text>
            <Text>Address: {formData.step2.address}</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text>Step 3: Additional Info</Text>
            <Text>Occupation: {formData.step3.occupation}</Text>
            <Text>Skills: {formData.step3.skills.join(", ")}</Text>
            <Text>Bio: {formData.step3.bio}</Text>
            <Text>Agree: {formData.step3.agree ? "Yes" : "No"}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
