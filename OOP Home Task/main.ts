class DataTypes {
    private language: string = '';
  
    //Java
    constructor(language: string) {
      this.language = language;
    }
  
    getLanguage() {
      return this.language;
    }
  }
  
  class PrimitiveDataTypes extends DataTypes {
    public isPrimitiveTypes: boolean = true;
  
    public types: Array<string> = ['byte', 'short', 'int', 'long', 'float', 'double', 'boolean', 'char'];
  
    public getTypes() {
      return this.types.map((type: string) => {
        type;
      })
    }
  }
  
  class NonPrimitiveDataTypes extends DataTypes {
    public isPrimitiveTypes: boolean = false;
  
    public types: Array<string> = ['String', 'Arrays', 'Classes'];
  
    public getTypes() {
      return this.types.map((type: string) => {
        type;
      })
    }
  }
  
  class ByteDataType extends PrimitiveDataTypes {
    private byteSize: number = 1;
  
    private getbyteSize() {
      return this.byteSize;
    }
  
    private isPrimitiveType() {
      return this.isPrimitiveTypes;
    }
  
  }
  
  class ShortDataType extends PrimitiveDataTypes {
    private byteSize: number = 2;
  
    private getbyteSize() {
      return this.byteSize;
    }
  
    private isPrimitiveType() {
      return this.isPrimitiveTypes;
    }
  }
  
  class StringDataType extends NonPrimitiveDataTypes {
    private description: string = 'A String variable contains a collection of characters surrounded by double quotes';
  
    private getDescription() {
      return this.description;
    }
  
    private isPrimitiveType() {
      return this.isPrimitiveTypes;
    }
  }
  
  class ArraysDataType extends NonPrimitiveDataTypes {
    private description: string = 'Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value';
  
    private getDescription() {
      return this.description;
    }
  
    private isPrimitiveType() {
      return this.isPrimitiveTypes;
    }
  }