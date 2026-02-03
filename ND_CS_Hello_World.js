// Create clientscript for hello world using suitescript 2.1
/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define([], () => {
  const pageInit = (context) => {
    // Added Comments for test
    // Added New comments to check
    alert('Hello, World!');
  };    
    return {
    pageInit
  };
});