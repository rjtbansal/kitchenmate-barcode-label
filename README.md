Technology Stack:

- React using [nextJS](https://nextjs.org/)

Running the Project:

- Download/clone the project from github: (https://github.com/rjtbansal/kitchenmate-barcode-label)
- In CLI, run 'npm install' to install all packages and dependencies from package.json
- Run 'npm run dev' to trigger nextJS server
- Access: http://localhost:3000/

Features Overview:

- Unique barcode names are being used based on the format 'km12<id>' where id is retrieved during fetch from public API
- Every label is getting printed on the new page irrespective of the size of the paper used
- Generate PDF button only shows the URL hit

Future Improvements if had more time:

- Would have liked to completely implement the PDF generation feature. Somehow after hitting the API to get PDF I was instead getting a type FILE. Upon converting it to PDF all my data appeared as a JSON printed in the file. So need to debug on my end why is that the case.
- Styling of labels could have been improved more with more data on the label
- Code could have been refactored more especially the data used to make API calls
