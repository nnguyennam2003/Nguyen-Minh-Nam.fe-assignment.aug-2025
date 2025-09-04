# Result Narration Checklist

- [✅] A1: Layout Implementation. UI Framework: HTML, TailwindCSS, SwiperJS (Carousel, slide), Boxicons (Icons)
  - [✅] Use the exact font designed in figma
  - [✅] Use the exact colors and spacing designed in figma
  - [✅] Pixel perfect implementation     
  - [✅] Handle interactive states (carousel, hover, etc.)
*Note A1: Please refer to `./A1/NOTES.md`*

- [✅] A2: Multi-Step Form with Live PDF Preview. Libaries used: ReactJS, Redux, TailwindCSS, Shadcn UI, react-hook-form, zod, @react-pdf/renderer
  - [✅] Implement a multi-step form with at least 3 steps.
  - [✅] Each step has its own form.
  - [✅] Users can navigate forward and backward, all previously entered data must be preserved when moving between steps.
  - [✅] Users can reset the data of the entire form.
  - [✅] Can only click the "Continue" button after filling in all the fields in the form.
  - [✅] When the user submits (for each step of the form or the entire application), immediately display the data on the PDF preview area.
  - [✅] Show progress bar of the whole process.
  - [✅] Validate the form data before submitting.
*Note A2: Please refer to `./A2/NOTES.md`*

- [✅] A3: Map & Location List Synchronization. Libraries used: ReactJS, TailwindCSS, @react-google-maps/api, Shadcn UI
  - [✅] Display the list of locations in a list view and all locations must be marked on the map.
  - [✅] Allow user to sort the list of locations by rating.
  - [✅] Allow user to search the list of locations by name or address.
  - [✅] Allow user to select a location from the list and the map will be synchronized with the selected location (fly to the selected location).
  - [✅] Hightlight both the list and the map marker of the selected location.
  - [✅] Show a popup/tooltip with location details when clicking the marker.
  - [ ] Optimize the locations list for large dataset.
*Note A2: Please refer to  `./A3/NOTES.md`*