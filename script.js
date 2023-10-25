document.addEventListener('DOMContentLoaded', function () {
    const cvForm = document.getElementById('cv-form');
    const cvPreview = document.getElementById('cv-preview');
    const downloadButton = document.getElementById('download-cv');

    cvForm.addEventListener('input', function () {
        updateCVPreview();
    });

    downloadButton.addEventListener('click', function () {
        downloadCV();
    });

    function updateCVPreview() {
        const cvData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            education: document.getElementById('education').value,
            experience: document.getElementById('experience').value,
        };

        // Simulate generating the HTML content for the CV preview
        const cvHTML = `
            <html>
            <head>
                <title>CV Preview</title>
            </head>
            <body>
                <h1>${cvData.name}</h1>
                <p>Email: ${cvData.email}</p>
                <p>Education: ${cvData.education}</p>
                <p>Work Experience: ${cvData.experience}</p>
            </body>
            </html>
        `;

        // Display the CV preview in the iframe
        cvPreview.srcdoc = cvHTML;
    }

    function downloadCV() {
        // Simulate generating and downloading the PDF
        // In a production environment, you would use a PDF generation library.
        const cvData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            education: document.getElementById('education').value,
            experience: document.getElementById('experience').value,
        };

        const pdfContent = `CV for ${cvData.name}\n\nEmail: ${cvData.email}\nEducation: ${cvData.education}\nWork Experience: ${cvData.experience}`;

        // Create a blob from the PDF content
        const blob = new Blob([pdfContent], { type: 'application/pdf' });

        // Create an object URL and set it as the download link
        const url = URL.createObjectURL(blob);
        downloadButton.href = url;
    }
});
