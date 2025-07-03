function phoneNumberDirectory(phoneNumbers) {
  const directory = new Map();
  for (const contact of phoneNumbers) {
    const [name, phone] = contact.split(":");
    directory.set(name, phone);
  }
  return directory;
}

module.exports = phoneNumberDirectory;
