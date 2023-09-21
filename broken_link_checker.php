<?php
// Simulated link checking logic (replace with actual logic)
function checkLinks($url, $option)
{
    // Perform link checking based on the selected option
    // Return an array of broken links (if any)

    // Simulated result
    $brokenLinks = [
        'https://wpdki.com/?page_id=13870',
        // Add more broken links here
    ];

    return $brokenLinks;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $siteUrl = $_POST['siteUrl'];
    $checkOption = $_POST['checkOption'];

    $brokenLinks = checkLinks($siteUrl, $checkOption);

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($brokenLinks);
}
?>
