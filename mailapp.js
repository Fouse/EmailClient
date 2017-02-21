var mailapp = (function() {
  var folders = [];

  function Folder(name) {
    this.name = name;
    this.emails = [];
  }

  Folder.prototype.addEmail = function(email) {
    this.emails.push(email);
  };

  function Email(sender, receiver, subject, message) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.message = message;
  }

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

  return {
    createFolder: createFolder,
    addEmail: addEmail,
    getFolder: getFolder
  };
})();
