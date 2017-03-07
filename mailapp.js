var mailapp = (function() {
  var folders = [];
  var senItems=[];
 function addToSentItems(rcv,sb,msg){
   senItems.push({message:msg,subject:sb,receiver:rcv});
 }
 function getSentItems(){
   return senItems;
 }
  function Folder(name) {
    this.name = name;
    this.emails = [];
  }


  function Email(sender, receiver, subject, message) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.message = message;
  }
  Folder.prototype.addEmail = function(email) {
    this.emails.push(email);
  };

  function createFolder(name) {
    var folder = new Folder(name);
    folders.push(folder);
  }

  function addEmail(folderName, sender, receiver, subject, message) {
    for (var i = 0; i < folders.length; i++) {
      if (folders[i].name === folderName) {
        folders[i].addEmail(new Email(sender, receiver, subject, message));
      }
    }
  }

  function getFolder(folderName) {
    for (var i = 0; i < folders.length; i++) {
      if (folders[i].name === folderName) {
        return folders[i].emails;
      }
    }
  }

  function getFolders() {
    var names = [];
    for (var i = 0; i < folders.length; i++) {
      names.push(folders[i].name);
    }
    return names;
  }

  return {
    createFolder: createFolder,
    addEmail: addEmail,
    getFolder: getFolder,
    getFolders: getFolders,
    addToSentItems:addToSentItems,
    getSentItems:getSentItems
  };
})();
