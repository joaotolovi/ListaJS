class ArrayList {
  constructor() {
    //inicializa um array vazio que vai guardar todos os dados
    this.data = new Array()
  }
  //função de acicionar valor ao array, é adicionado sempre no fim
  append(value) {
    this.data[this.size()] = value
  }
  //função de adicionar valor ao array podendo escolher a posição
  insert(position, value) {
    //validação se o position pode ser aplicado ao estado atual do array
    //Não há posição negativa e a posição não pode ser maior que o tamanho do array
    if (position < 0 || position > this.size()) {
      throw new Error('Invalid position')
    }
    //se a posição for igual ao tamanho do array, adiciona o valor no fim
    //pode-se usar a função append no lugar de manipular o data diretamente
    if (position == this.data.length) {
      this.data.push(value)
    } else {
      //se não, adiciona na posição escolhida
      //adiciona na posição position sem excluir nenhum elemento
      //o restante é movido para frente
      this.data.splice(position, 0, value)
    }
  }
  //remove um elemento a partir do seu valor
  //remove sempre o primeiro valor encontrado
  remove(value) {
    //procura o index do valor
    let index = this._getIndexOf(value)
    //remove o valor na posição index
    //usa a função já existente declarada na classe removeAt
    this.removeAt(index)
  }
  //remove um elemento a partir da posição
  removeAt(position) {
    //validação se o position pode ser aplicado ao estado atual do array
    //poderiamos desacoplar essa logica de validação repetitiva
    if (position < 0 || position > this.size() - 1) {
      throw new Error('Invalid position')
    }
    //remove o valor na posição position, somente 1 elemento
    return this.data.splice(index, 1)
  }
  //retorna o tamanho do array
  size() {
    return this.data.length
  }
  //retorna o array em sua representação de string
  toString(separator = '-') {
    return this.data.join(separator)
  }
  //retorna o index do valor
  _getIndexOf(value) {
    //validação se o array está vazio
    if (this.data.length == 0) {
      throw new Error('empty list')
    }
    //inicializar um interator
    let i = 0
    //começa do 0 e vai até o tamanho do array
    //poderia ter usado a função size()
    while (i < this.data.length) {
      //se o valor na posição i for igual ao valor procurado
      if (this.data[i] == value) {
        break
      }
      i++
    }
    //agora temos 2 situações
    //ou o i é igual ao tamanho do array o que significa que o valor não foi encontrado
    //ou o i é igual ao index do valor procurado
    if (i == this.data.length) {
      //lança um erro de valor não encontrado
      throw new Error('not found')
    }
    //retorna i como index
    return i
  }
}
