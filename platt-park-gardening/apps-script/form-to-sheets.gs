// Platt Park Gardening — Form Submission to Google Sheets
// Spreadsheet: https://docs.google.com/spreadsheets/d/138qt-SA25qspoMZZl5QR_XXo6MN0Y8I6Y1ESvgWE0II

const SHEET_ID = '138qt-SA25qspoMZZl5QR_XXo6MN0Y8I6Y1ESvgWE0II';
const SHEET_NAME = 'Leads'; // Will create this tab if it doesn't exist

const HEADERS = [
  'Timestamp', 'Name', 'Phone', 'Email',
  'Address', 'ZIP', 'Lot Size',
  'Services', 'Timing', 'Notes', 'Photos',
];

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#2F3C25').setFontColor('#F5EFE4');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet();

    sheet.appendRow([
      new Date().toLocaleString('en-US', { timeZone: 'America/Denver' }),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.address || '',
      data.zip || '',
      data.lot || '',
      Array.isArray(data.services) ? data.services.join(', ') : (data.services || ''),
      data.timing || '',
      data.notes || '',
      data.photoCount || 0,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Platt Park Gardening — form endpoint is live.')
    .setMimeType(ContentService.MimeType.TEXT);
}
