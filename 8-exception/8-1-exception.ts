//Java -> Exception
// Js, Ts -> Error

//ts에서 exception handling trick
function doSomething(direcion: "up" | "down" | "right" | "left"): void {
  switch (direcion) {
    case "up": {
      break;
    }
    case "down": {
      break;
    }
    case "right": {
      break;
    }
    case "left": {
      break;
    }
    default: {
      const invalid: never = direcion;
      throw new Error(`unknown direction ${invalid}`);
    }
  }
}

// Error(Exception) Handling : try -> catch ->  finally
function readFile(fileName: string): string {
  if (fileName === "not exsit") {
    throw new Error(`file not exsit ${fileName}`);
  }
  return "file contents";
}
function closeeFile(fileName: string): void {}

const fileName = "file";
try {
  readFile(fileName);
} catch (error) {
  console.log(error);
} finally {
  closeeFile(fileName);
}
