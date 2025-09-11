<?php
// Serve the React app's index.html for all requests
// This ensures compatibility with PHP hosting while maintaining SPA functionality

$indexPath = __DIR__ . '/index.html';

// Check if index.html exists
if (file_exists($indexPath)) {
    // Set proper content type
    header('Content-Type: text/html; charset=UTF-8');
    
    // Serve the index.html file
    readfile($indexPath);
} else {
    // Fallback if index.html doesn't exist
    http_response_code(404);
    echo "Application not found. Please ensure the build files are properly deployed.";
}
?>