document.getElementById('checkButton').addEventListener('click', function () {
    const siteUrl = document.getElementById('siteUrl').value;
    const checkOption = document.getElementById('checkOption').value;
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = 'Verifying...';

    // Simulate a delay (you can replace this with actual link checking logic)
    setTimeout(function () {
        resultDiv.innerHTML = '';

        // Replace this array with your actual broken link data
        const brokenLinks = [
            'https://wpdki.com/?page_id=13870',
            // Add more broken links here
        ];

        if (brokenLinks.length > 0) {
            resultDiv.innerHTML = '<h2>Broken Links:</h2><ul>';
            for (const link of brokenLinks) {
                resultDiv.innerHTML += `<li>${link}</li>`;
            }
            resultDiv.innerHTML += '</ul>';
        } else {
            resultDiv.innerHTML = '<h2>No broken links found.</h2>';
        }
    }, 2000); // Simulated verification time (2 seconds)

    // Simulate a progress bar (you can replace this with actual progress tracking)
    const progressBar = document.createElement('div');
    progressBar.className = 'progress mt-3';
    progressBar.innerHTML = '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%"></div>';
    resultDiv.appendChild(progressBar);
});
