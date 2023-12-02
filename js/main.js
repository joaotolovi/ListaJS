var list = new DynamicList()

$().ready(function () {
  $('#insert').click(insertElement)
  $('#insert_at').click(insertElementAt)
  $('#remove').click(removeElement)
  $('#remove_at').click(removeElementAt)
})

function showErroMessage(message) {
  let text = `
  <div class="ui red segment">${message} </div>
  `
  let out = $('#output')
  out.empty()
  out.append(text)
}

function showData() {
  let text = `<div class="ui label">
                      ${list.toString('</div><div class="ui label">')}
                  </div>`
  // let text = list.toString('<br>')
  let out = $('#output')
  out.empty()
  out.append(text)
}
function insertElement() {
  //pega o valor a ser inserido
  const valStr = prompt('digite um valor a ser inserido:')
  try {
    //converte o valor de string para float
    const val = parseFloat(valStr)
    //insere o elemento
    list.append(val)
    //atualiza a lista interface
    showData()
  } catch (error) {
    //se der erro, exibe o erro
    showErroMessage(error.message)
  }
}
function insertElementAt() {
  //pega o valor a ser inserido
  let valStr = prompt('digite um valor a ser inserido:')
  //pega a posição a ser inserido
  let posStr = prompt('digite uma posição a inserir:')

  try {
    //converte o valor de string para float
    const val = parseFloat(valStr)
    //converte a posição de string para inteiro
    const pos = parseInt(posStr)
    //insere o elemento
    list.insert(pos, val)
    //atualiza a lista interface
    showData()
  } catch (error) {
    //se der erro, exibe o erro
    showErroMessage(error.message)
  }
}
function removeElement() {
  //pega o valor a ser removido
  let valStr = prompt('digite um valor a ser removido:')
  try {
    //converte o valor de string para float
    //para validar
    const val = parseFloat(valStr)
    //remove o elemento
    list.remove(val)
    //atualiza a lista interface
    showData()
  } catch (error) {
    //se der erro, exibe o erro
    showErroMessage(error.message)
  }
}
function removeElementAt() {
  //pega a posição a ser removida
  let posStr = prompt('digite uma posição a remover:')
  try {
    //converte a posição de string para inteiro
    const pos = parseInt(posStr)
    //remove o elemento
    list.removeAt(pos)
    //atualiza a lista interface
    showData()
  } catch (error) {
    //se der erro, exibe o erro
    showErroMessage(error.message)
  }
}