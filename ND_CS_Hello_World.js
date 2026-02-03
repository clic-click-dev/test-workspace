// Create clientscript for hello world using suitescript 2.1
/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define([], () => {
  const pageInit = (context) => {
    alert('Hello, World!');
  };    
    return {
    pageInit
  };
});