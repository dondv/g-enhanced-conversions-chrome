
## This is a simple Chrome Extension that checks for Enhanced Conversions   

This Chrome extension is designed to monitor and inspect network requests related to Google’s ads Enhanced Conversions. It listens for requets going to Google e.g.  "googleadservices.com/pagead/conversion/" or "google.com/pagead/1p-conversion/".

When a relevant network request is detected, the extension allows you to view the payload and inspect the query string parameters. It specifically looks for the "em" parameter, which contains a hashed string starting with "tv.1~em". -

This parameter indicates that the enhanced conversions tag is successfully capturing and hashing the enhanced_conversion_data object.

You can use this extension to verify that enhanced conversion tracking is functioning correctly on your site, ensuring that customer data is being accurately hashed and securely transmitted. 

Additionally, it serves as a monitoring tool to understand which websites are sharing your information with Google.

[Learn more about setting up and validating Enhanced Conversions](https://support.google.com/google-ads/answer/13262500#zippy=%2Cset-up-standard-automatic-enhanced-conversions%2Cfind-enhanced-conversions-variables%2Cenable-enhanced-conversions-in-google-tag-manager%2Cafter-hours-review-the-diagnostics-report-to-confirm-your-implementation%2Cvalidate-your-implementation-using-chrome-developer-tools:~:text=Validate%20your-,implementation,-using%20Chrome%20Developer)

## How to Add the Chrome Extension from Your Local Machine

1. Download the extension from this Gibhub Repo

2. Navigate to 'chrome://extensions/' in Google Chrome.

3. Enable "Developer mode" using the toggle switch in the top-right corner.

4. Click "Load unpacked" and select your extension's folder.

5. Enable on the Extensions page.

6. Navigate to a website where enhanced conversion is enabled.

![Screenshot of the Extension](https://github.com/dondv/g-enhanced-conversions-chrome/blob/main/images/screenshot.png)
