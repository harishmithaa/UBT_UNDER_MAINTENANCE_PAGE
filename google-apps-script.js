/**
 * Udumalpet Business Tour (UBT) - Early Access Form Handler
 * 
 * Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1Vg3DDaAeGipCJkWH7mHXntAuwjogt-LUo5vwb3bPom8/edit
 * 2. Go to Extensions -> Apps Script.
 * 3. Delete any existing code and paste this script.
 * 4. Click "Deploy" (top right) -> "New deployment".
 * 5. Select type: "Web app".
 * 6. Set "Execute as": "Me".
 * 7. Set "Who has access": "Anyone".
 * 8. Click "Deploy", authorize permissions, and copy the Web App URL.
 * 9. Paste the Web App URL into your frontend configuration: `public/config.json`.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Acquire a lock for up to 30 seconds to prevent race conditions during simultaneous writes
    lock.waitLock(30000);
    
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();
    
    // Auto-initialize headers if the sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Full Name", "Business Name", "Mobile Number", "Business Category", "Email Address", "Registered At"]);
      
      // Style headers for a professional look
      var headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#001c41"); // Navy brand color
      headerRange.setFontColor("#ffffff");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
      
      // Auto-resize columns
      sheet.autoResizeColumns(1, 6);
    }
    
    // Parse input data
    var data = JSON.parse(e.postData.contents);
    var name = data.name ? data.name.trim() : "";
    var businessName = data.businessName ? data.businessName.trim() : "";
    var mobile = data.mobile ? String(data.mobile).trim() : "";
    var category = data.category ? data.category.trim() : "";
    var email = data.email ? data.email.trim() : "";
    
    // Required fields validation
    if (!name || !businessName || !mobile || !category) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Missing required fields: Name, Business Name, Mobile, or Category."
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Mobile number format verification (10 digits)
    var mobileClean = mobile.replace(/[^0-9]/g, "");
    if (mobileClean.length < 10) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Please enter a valid 10-digit mobile number."
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Prevent duplicate mobile numbers
    var lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      // Mobile numbers are in column 3 (C)
      var mobileValues = sheet.getRange(2, 3, lastRow - 1, 1).getValues();
      for (var i = 0; i < mobileValues.length; i++) {
        var existingMobile = String(mobileValues[i][0]).replace(/[^0-9]/g, "");
        if (existingMobile === mobileClean) {
          return ContentService.createTextOutput(JSON.stringify({
            success: false,
            message: "This mobile number is already registered for early access!"
          })).setMimeType(ContentService.MimeType.JSON);
        }
      }
    }
    
    // Append the row
    var timestamp = new Date();
    sheet.appendRow([name, businessName, mobile, category, email, timestamp]);
    
    // Auto-resize columns to fit new content
    sheet.autoResizeColumns(1, 6);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Successfully registered for UBT early access!"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Server Error: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    // Release the script lock
    lock.releaseLock();
  }
}

// Support CORS Preflight requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
