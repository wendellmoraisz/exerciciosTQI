// todos os parâmetros são opicionais
//new Error(message, filename, lineNUmber);

const myError = new Error('Mensagem inválida');
myError.name = 'InvalidMessage';


throw myError;