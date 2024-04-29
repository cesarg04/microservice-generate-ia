function generateEnumsFromKeys<T extends Record<string, any>>(obj: T) {
    // add support for nested objects
    return Object.keys(obj).reduce((enums: any, key) => {
      enums[key] = key;
      return enums;
    }, {} as Record<keyof T, string>);
  }
  
  
  export { generateEnumsFromKeys };