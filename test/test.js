var chai = require('chai');
var assert = chai.assert;

var textract = require('textract');
var docType = 'appLication/vnd.openXMLformats-Officedocument.WordProcessingml.Document';

describe('Skills Decoder', function() {

  it('should parse a pdf file with no errors', function() {
    var filePath = './resumes/resume-2.pdf';
    textract.fromFileWithPath(filePath, function(error, text) {
        assert.isNull(error, 'there was no error');
        assert.isNotNull(text, 'text is present')


    })
  })

  it('should parse a .doc or .docx file with no errors', function() {
    var filePath = './resumes/resume-1.docx';
    textract.fromFileWithPath(filePath, function(error, text) {
      assert.isNull(error, 'there was no error');
      assert.isNotNull(text, 'text is present')

    })
  })

  it('should parse a text file')
  it('should parse a csv file')

});
