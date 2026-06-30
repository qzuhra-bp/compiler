let html_area = document.getElementById('html_area')
let html_css = document.getElementById('html_css')
let result = document.getElementById('result')

function render() {
    let customResult = `<style>${html_css.value}</style>${html_area.value}`
    result.innerHTML = customResult
}

function onHtml() {
    render()
}

function onCss() {
    render()
}


