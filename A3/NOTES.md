# Notes - A3: Map & Location List Synchronization

## What I Have Completed

- Implemented layout with **ReactJS, TailwindCSS, Shadcn UI, @react-google-maps/api**.
- Displayed a **list of locations** in a sidebar and **all locations are marked on the map**.
- Added **sorting functionality** by rating.
- Added **search functionality** by location name.
- Implemented **synchronization between list and map**:
  - Clicking on a location in the list **moves the map to that location** and highlights both the marker and the list item.
  - Clicking on a map marker **highlights the marker and scrolls the list to the corresponding item**.
- Added **InfoWindow/popups** to show location details when clicking markers.
- Applied **basic styling and UI consistency** using Shadcn UI and TailwindCSS.

## What I Could Not Complete (Due to Limited Time)

- **Optimizing the locations list for large dataset**:
  - Planned to use **react-window** for virtualization to handle large datasets efficiently.
  - Did not finish integration due to time constraints and ongoing research on how to combine it with sorting, searching, and active selection.

## Future Improvements (If I Had More Time)

- Fully integrate **react-window** to handle **thousands of locations** without performance issues.
- Add **debounced search** for smoother experience with large datasets.
- Enhance **UI/UX** for the list and map interaction:
  - Custom icons for markers.
  - Smooth animation when flying to selected locations.
