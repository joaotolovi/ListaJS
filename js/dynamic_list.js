class DynamicList {
  constructor() {
    //aqui temos dois atributos
    //this.head representa o primeiro no
    this.head = null
    //this.length representa o tamanho da lista
    this.length = 0
  }
  //pega o ultimo no
  getLast() {
    //inicializa o interator com o primeiro no
    let i = this.head
    //enquanto houver nos apontanto para outros nos
    while (i.next != null) {
      //avança para o proximo no
      i = i.next
    }
    //se chegou aqui é porque tem um no que não aponta para ninguem
    //ou seja é o ultimo no
    return i
  }
  //adiciona um valor no final da lista
  append(value) {
    //valida se o valor é valido
    if (!value) {
      throw new Error('Informe um valor válido')
    }
    //cria um novo no com o valor
    const node = new Node(value)
    //agora precisamos definir quem vai apontar para ele
    //ou seja o ultimo elemento
    //se o head for nulo, significa que não tem nenhum no na lista
    if (this.head == null) {
      //então o head vai apontar para o novo no
      this.head = node
    } else {
      //se não, o ultimo no vai apontar para o novo no
      this.getLast().next = node
    }
    //incrementa o tamanho da lista
    this.length++
  }
  //adiciona um valor na posição
  insert(position, value) {
    //valida se o valor é valido e se a posição é valida
    if (position < 0 || position > this.size()) {
      throw new Error('Invalid position')
    }

    if (position == this.length) {
      this.append(value)
      return
    }
    //cria um novo no com o valor
    const newNode = new Node(value)
    //se a posição for 0, significa que o novo no vai ser o primeiro
    //daria para desacoplar daquim, lógica repetida
    if (position == 0) {
      //o novo no aponta para o head
      //não faz sentido o next do novo no apontar para o head
      newNode.next = this.head
      //o head agora é o novo no
      this.head = newNode
    } else {
      //se não, precisamos encontrar o no anterior
      //iniciamos previous que vai guardar o no anterior
      let previous = this.head
      //iniciamos current que vai guardar o no atual
      let current = previous.next
      //iniciamos o index que vai guardar a posição atual
      let index = 1
      //enquanto o index for diferente da posição
      //por isso iniciamos o index com 1
      while (index != position) {
        //avança o index
        index++
        //o previous vai ser o current
        previous = current
        //o current vai ser o proximo
        current = current.next
        //é como se a gente estivesse andando na lista
      }
      //quando o index for igual a posição
      //o previous vai apontar para o novo no
      //e o novo no vai apontar para o current
      previous.next = newNode
      newNode.next = current
    }
    //incrementa o tamanho da lista
    this.length++
  }
  //remove um elemento a partir do seu valor
  remove(value) {
    //valida se o valor é valido
    if (!value) {
      throw new Error('Digite um valor válido')
    }
    //inicia o current com o head
    let current = this.head
    //inicia o previous com null
    let previous = null
    //enquanto o current for diferente de null
    //porque se for null significa que chegou no final da lista
    while (current != null) {
      //se o valor do current for igual ao valor procurado
      if (current.content === value) {
        //sai do loop
        //porque já encontrou o valor e o no dele
        break
      }
      //o previous vai ser o current
      previous = current
      //o current vai ser o proximo
      current = current.next
    }
    //se o current for null
    //significa que não encontrou o valor
    if (current == null) {
      return null
    }
    //se o current for o head
    if (current == this.head) {
      //o head vai ser o no apontado por head
      //mudanmos a referencia do head
      this.head = current.next
    } else {
      //se não, o previous vai apontar para o proximo do current
      //ou seja o no com o valor vai ser pulado sem mais ninguem apontar para ele
      previous.next = current.next
    }
    //o current não aponta para ninguem
    current.next = null
    //decrementa o tamanho da lista
    this.length--
    //retorna o valor do no removido
    return current.content
  }
  //remove um elemento a partir da posição
  removeAt(position) {
    //valida se a posição é valida
    if (position < 0 || position > this.size() - 1) {
      throw new Error('Invalid position')
    }
    //inicia o current o previous e o index
    let current = this.head
    let previous = null
    let index = 0
    //enquanto o index for diferente da posição
    while (index != position) {
      //avança o index
      index++
      //o previous vai ser o current
      previous = current
      //o current vai ser o proximo no da lista
      current = current.next
    }
    //se o current for o head
    //precisamos mudar a referencia do head
    if (index == 0) {
      this.head = this.head.next
    } else {
      //se não, o previous vai apontar para o proximo do current
      //removendo a referencia do current
      previous.next = current.next
    }
    //o current não aponta para ninguem
    current.next = null
    //decrementa o tamanho da lista
    this.length--
    //retorna o valor do no removido
    return current.content
  }

  size() {
    //retorna o tamanho da lista
    return this.length
  }
  //retorna o array em sua representação de string com separador escolhido
  toString(separator = '-') {
    //inicia o output como string vazia
    let output = ''
    //se o head for null significa que não ha elementos na lista
    if (this.head == null) {
      //retorna a string vazia
      return output
    }
    //vai percorrer todos os nos pegando o valor de cada um
    //e concatenando com o separador
    for (let i = this.head; i != null; i = i.next) {
      output = output + i.content + separator
    }

    const outputCut = output.length - separator.length
    //formata o output cortando o ultimo separador
    output = output.substring(0, outputCut)

    return output
  }
}
