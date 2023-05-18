# know-code-test

# DESCRIÇÃO:
Este é o back-end da aplicação, o objetivo dele é rodar o algoritmo de busca das palavras
A aplicação consiste em apenas uma rota que recebe os parâmetros na URL separados por vírgula e os arquivos no formato de formdata
O código ficou organizado em pastas de forma a facilitar a manutenção e leitura do mesmo.

# COMO FUNCIONA:
A aplicação começa recebendo as variáveis, tanto as palavras quanto os arquivos.
Após isso ele cria um ARRAY de palavras separando-as pela ",". 
Então, para cada palavra ele trabalha em cima de seu arquivo correspondente, aceitando um ou mais de uma vez só.
E então finaliza buscando todas as palavras na string de data do arquivo, por meio de uma expressão regular. (Similar ao comando CTRL + F)

