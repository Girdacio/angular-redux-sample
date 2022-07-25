# npm generate-release
# 1 - atualiza versão no package.json
# 2 - Atualiza versão no index.html metatag version
# 3 - commit o update de versão
# 4 - gera TAG da versão fechada
sed -i -e '/version/s/2.0.1/3.0.3/' src/index.html && npm version "3.0.3"

# pega versão do sistema no package.json
grep "version" package.json | awk -F '"' '{print $4}'