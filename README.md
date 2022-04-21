# react_treinamento
Repositório para armazenar meus projetos de treinamento em react



# Configurando ambiente React Native / Windows
Dependências necessárias:
Chocolatey;
Node.js;
Python 2;
Openjdk11;
Android Studio
Instalando Chocolatey
Para instalar as libs no Windows, vamos utilizar um gerenciador de pacotes do Windows chamado Chocolatey. Esse gerenciador nos possibilita instalar dependências e ferramentas no sistema com poucos comandos e tudo pelo terminal. Execute o powershell como administrador utilizando a tecla Windows + X ou clicando com o botão direito sobre o botão “Iniciar”:


Execute o comando abaixo para verificar se você possui permissões para instalar dependências com o terminal:

Get-ExecutionPolicy

Caso o retorno desse comando seja diferente de “Restricted”, pule para o próximo passo. Porém, se o retorno for “Restricted”, execute o seguinte comando em seu terminal:

Set-ExecutionPolicy AllSigned

Agora, execute o seguinte comando para instalar o Chocolatey:

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
Agora, feche seu powershell e abra normalmente seu CMD e teste se a instalação ocorreu corretamente executando o seguinte comando no seu cmd:

choco -v

Agora vamos instalar o Node.js,  Python2 e a openjdk 11

Abra novamente seu powershell como administrador e rode.

choco install -y nodejs-lts yarn python2 openjdk11

Agora feche seu powershell e abra seu cmd normalmente e execute, um de cada vez, os seguintes comandos para verificar se instalou corretamente:

node -v
npm -v
python –version
java -version

Se todas apresentaram os valores das suas versões, a instalação foi um sucesso. Desses valores, precisamos anotar apenas um: uma parte do java -version. Supondo que o resultado desse comando tenha sido:

java version “1.8.0_251”
Java(TM) SE Runtime Environment (build 1.8.0_251-b08)
Java HotSpot(TM) Client VM (build 25.251-b08, mixed mode)

 

Preparativos Android Studio
Crie uma pasta em um local desejado para instalação da SDK (Ex.: C:\Android\Sdk). É muito importante que esse caminho não possua espaços ou caracteres especiais pois irá causar erros.

Anote esse caminho para ser utilizado posteriormente

Agora, no Painel de Controle do Windows, abra o item “Sistema e Segurança” ou “Sistema”, clique em “Configurações avançadas do sistema”, e clique no botão “Variáveis de ambiente” e clique no botão “Nova variável de ambiente”, indique o nome da variável como ANDROID_HOME, adicione o caminho utilizado acima (Ex.: C:\Android\Sdk) como segundo parâmetro e clique em OK.

 


Faça o mesmo processo para criar a variável JAVA_HOME. Mas primeiramente temos que obter o caminho de instalação.

Você pode ir no seu computador e ir nas pastas: C:\Program Files\OpenJDK e lá vai ter a pasta com nome openjdk e o numero da versão exemplo: openjdk-11.0.14.1_1

Agora só pegar todo caminho até essa pasta exemplo aqui no meu PC: 

C:\Program Files\OpenJDK\openjdk-11.0.14.1_1

E colocar esse caminho nas suas variáveis ambiente como JAVA_HOME

C:\Program Files\OpenJDK\openjdk-[VERSÃO_ANOTADA_POR_VOCÊ]

Na mesma janela de “Variáveis de ambiente” no Windows, clique na variável PATH e então em “Editar“. Haverá uma lista de caminhos e você deve adicionar esses quatro novos caminhos no fim da lista:

%ANDROID_HOME%\emulator

%ANDROID_HOME%\tools

%ANDROID_HOME%\tools\bin

%ANDROID_HOME%\platform-tools

** Se sua versão do Windows for menor que a 10 sempre coloque ponto-e-virgula “;” no final dos caminhos para eles não se juntarem **


Instalando Android Studio
Acesse a página do Android Studio e clique no botão Download Android Studio.

Vá até a pasta onde o arquivo foi salvo e execute o instalador.

A primeira janela que deve aparecer é para escolher o que vai ser instalado. Por padrão, a opção Android Studio já vem selecionada. Selecione também a opção Android Virtual Device e clique em Next.

Na sequência, será perguntado sobre o local de instalação do Android Studio. Pode deixar o caminho padrão e clicar em Next.

Em seguida, será perguntado sobre a pasta no menu Iniciar. Deixe o padrão e clique em Install.

Nessa etapa será realizada instalação. Quando terminar, clique em Next.

Por fim, será apresentada a janela de fim da instalação. Deixe a opção Start Android Studio marcada e clique em Finish.

 

Configurando Android Studio
 
Com o Android Studio instalado, chegou a hora de fazer a configuração inicial do programa.

A primeira janela a ser apresentada deve ser perguntando sobre a importação de configurações de outro Android Studio. Selecione a opção Do not import settings e clique em OK.

Em seguida, o Android Studio começará a carregar. Em algum ponto do carregamento, será apresentada uma janela sobre compartilhamento de dados anônimos com a Google. Essa opção é pessoal, escolha o que preferir.

Após o carregamento terminar, deve aparecer uma página de Welcome. Clique em Next.

Na sequência, será pedido o tipo de instalação. Escolha a opção Custom e clique em Next.

Nesse momento, será pedido para escolher a localização do pacote JDK instalado. Clique em ⬇ e escolha a opção JAVA_HOME. Verifique se ela está apontando para a JDK 8. Clique em Next


Agora, será perguntado sobre qual tema será utilizado. Escolha o que preferir e clique em Next

Chegamos na etapa mais importante do processo, a instalação da SDK. A janela apresentará algumas opções, marque todas.


A SDK é o pacote que vai possibilitar que sua aplicação React Native faça o build. Por padrão, ele instala a última SDK estável (nesse caso a 29);
O Intel HAXM é para melhorar a performance da emulação (Se você for utilizar o Hyper-V ou possuir um processador AMD, não marque essa opção.
O Android Virtual Device vai criar um emulador padrão pronto para execução.
Um fator essencial nessa etapa é o caminho de instalação da SDK. Utilize a pasta que você criou na seção Preparativos para o Android Studio (Ex.: C:\Android\Sdk). Não utilize espaços ou caracteres especiais pois causará erros mais para frente e o próprio Android Studio alerta se o seu caminho não está bom.

Se tudo estiver correto, clique em Next.

Na sequência, temos uma janela perguntando sobre a quantidade de RAM que será disponibilizada para que o HAXM utilize. Essa etapa não irá aparecer para todos pois nem todo computador é compatível com esse recurso. Deixe o recomendado pelo programa e clique em Next.

Em seguida, será apresentada uma janela com um resumo de todas as opções escolhidas até aqui. Verifique se está tudo certo, principalmente os caminhos da SDK e do JDK. Clique em Finish.

Por fim, será realizada a instalação das configurações selecionadas. Quando o programa terminar, clique em Finish.

SDK Manager
 

Em seguida, na aba SDK Platforms selecione o Android 9.0 (Pie), que corresponde à API (SDK) 28, e clique em Apply.


Nesse momento, será apresentada uma janela informando os componentes a serem instalados, o tamanho do download e da instalação e o espaço disponível na pasta SDK. Clique em OK.

Na sequência, serão apresentadas as licenças da SDK. Selecione a opção Accept e clique em Next.

Por fim, será realizada a instalação. Ao fim do processo, clique em Finish e repare que a agora a API 29 (instalada por padrão) e 28 estão com status Installed.



# Instalar o expo:

# Markdown 
```
cmd: npm install -g expo-cli
```

# Para criar o projeto:
# Markdown
```
cmd: expo init nomeDoProjeto
```
Se atentar para usar o bare workflow.

# Para iniciar um projeto:

# Markdown
```
cmd: expo start
ou
cmd: npx react-native run-android
```

Se não der certo com o npx, precisamos verificar se tem alguma problema:

# Markdown
```
cmd npx react-native doctor
```
