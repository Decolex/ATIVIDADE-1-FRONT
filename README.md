# ATIVIDADE-1-FRONT

Explicando as Expressões Regulares

# Validação do NOME
- ^[^0-9]{1,100}$: Esta expressão regular faz com que o campo de nome não contenha números;
- O ^ indica o início da string;
- [^0-9] significa que qualquer caractere que não seja um número não é valida;
- {1,100} especifica que o comprimento do nome deve ter até 100 caracteres,
- e o $ indica o final da string.

# Validação do EMAIL
- ^[^\s@]+@[^\s@]+\.[^\s@]+$: Esta expressão regular valida o formato do email;
- ^[^\s@]+ garante que o endereço de email não comece com um espaço em branco ou @;
- @[^\s@]+ garante que exista pelo menos um caractere após o @ e antes do primeiro ponto;
- @[^\s@]+\. garante que exista pelo menos um caractere após o primeiro ponto e antes do último ponto,
- e [^\s@]+$ garante que o último caractere não seja um espaço em branco ou @.

# Validação do NÚMERO COM DDD
- ^[0-9]{2}\s[0-9]{4,5}-[0-9]{4}$: Esta expressão regular valida o formato do telefone com DDD brasileiro;
- ^[0-9]{2} garante que os primeiros dois caracteres sejam dígitos;
- \s verifica um espaço em branco;
- [0-9]{4,5} verifica se há 4 ou 5 dígitos para o número do telefone, - verifica o hífen e [0-9]{4} garante que os últimos quatro caracteres sejam dígitos.
