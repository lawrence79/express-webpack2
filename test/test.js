var chai = require('chai');
var textract = require('textract');
var filePath = '../resumes/resume-1.docx';
var docType =  'appLication/vnd.openXMLformats-Officedocument.WordProcessingml.Document';

describe('Skills Decoder', function() {
    it('should parse a text file')
    it('should parse a pdf file')
    it('should parse a .doc or .docx file', function() {
      textract.fromFileWithPath(filePath, function( error, text ) {
        console.log('Error', error);
        console.log('Text', text);
        // do some checks with the data
      })
    })
    it('should parse a csv file')
});