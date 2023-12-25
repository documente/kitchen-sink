const nav = document.querySelector('nav');
const main = document.querySelector('main');

function appendCategory(title) {
  const h2 = document.createElement('h2');
  h2.textContent = title;
  main.appendChild(h2);

  const div = document.createElement('div');
  div.textContent = title;
  div.classList.add('category');
  nav.appendChild(div);
}

function appendSection(title, contentBuilder, snippet = null) {
  const section = document.createElement('section');
  section.id = title.toLowerCase().replace(/ /g, '-');
  const h3 = document.createElement('h3');
  h3.textContent = title;
  section.appendChild(h3);

  if (snippet) {
    const snippetContainer = document.createElement('div');
    snippetContainer.classList.add('snippet');
    snippetContainer.textContent = snippet;
    section.appendChild(snippetContainer);
  }

  section.appendChild(contentBuilder());

  const a = document.createElement('a');
  a.href = '#' + section.id;
  a.textContent = title;
  nav.appendChild(a);

  main.appendChild(section);
}

appendCategory('Actions');

appendSection('Visit', () => document.createElement('div'),
    `when I visit "http://localhost:8080/forward.html" then forward-header should exist done`);

appendSection('Click', () => {
  const container = document.createElement('div');
  const button = document.createElement('button');
  const span = document.createElement('span');
  span.id = 'message1';
  span.innerText = 'Clicked!';
  span.style.visibility = 'hidden';

  button.textContent = 'Click me';
  button.id = 'button1';
  button.addEventListener('click', () => {
    span.style.visibility = 'visible';
  });

  container.appendChild(button);
  container.appendChild(span);

  return container;
}, `given I visit "http://localhost:8080" when I click button1 then message1 should be visible done`);

appendSection('Double-click', () => {
  const container = document.createElement('div');
  const button = document.createElement('button');
  button.id = 'button2';
  const span = document.createElement('span');
  span.id = 'message2';

  span.innerText = 'Double-clicked!';
  span.style.visibility = 'hidden';

  button.textContent = 'Double-click me';
  button.addEventListener('dblclick', () => {
    span.style.visibility = 'visible';
  });

  container.appendChild(button);
  container.appendChild(span);

  return container;
}, `given I visit "http://localhost:8080" when I double-click button2 then message2 should be visible done`);

appendSection('Right-click', () => {
  const container = document.createElement('div');
  const button = document.createElement('button');
  button.id = 'button3';
  const span = document.createElement('span');
  span.id = 'message3';

  span.innerText = 'Right-clicked!';
  span.style.visibility = 'hidden';

  button.textContent = 'Right-click me';
  button.addEventListener('contextmenu', (evt) => {
    span.style.visibility = 'visible';
    evt.preventDefault();
  });

  container.appendChild(button);
  container.appendChild(span);

  return container;
}, `given I visit "http://localhost:8080" when I right-click button3 then message3 should be visible done`);

appendSection('Type', () => {
  const container = document.createElement('div');
  const input = document.createElement('input');
  input.id = 'input1';
  container.appendChild(input);
  return container;
}, `given I visit "http://localhost:8080" when I type "Some text" into input1 then it should have value "Some text" done`);

appendSection('Clear', () => {
  const container = document.createElement('div');
  const input = document.createElement('input');
  input.id = 'input2';
  input.value = 'Some text';
  container.appendChild(input);
  return container;
}, `given I visit "http://localhost:8080" when I clear input2 then it should have value "" done`);

appendSection('Check', () => {
  const container = document.createElement('div');
  const input = document.createElement('input');
  const span = document.createElement('span');
  span.id = 'message4';
  span.innerText = 'Unchecked';
  input.id = 'checkbox1';
  input.type = 'checkbox';
  input.addEventListener('change', (evt) => {
    console.log('change', evt.target.checked);
    span.innerText = evt.target.checked ? 'Checked' : 'Unchecked';
  });
  container.appendChild(input);
  container.appendChild(span);
  return container;
}, `given I visit "http://localhost:8080" when I check checkbox1 then message4 should have text "Checked" done`);

appendSection('Uncheck', () => {
  const container = document.createElement('div');
  const input = document.createElement('input');
  const span = document.createElement('span');
  span.id = 'message5';
  span.innerText = 'Checked';
  input.id = 'checkbox2';
  input.type = 'checkbox';
  input.checked = true;
  input.addEventListener('change', (evt) => {
    span.innerText = evt.target.checked ? 'Checked' : 'Unchecked';
  });
  container.appendChild(input);
  container.appendChild(span);
  return container;
}, `given I visit "http://localhost:8080" when I uncheck checkbox2 then message5 should have text "Unchecked" done`);

appendSection('Scroll', () => {
  const container = document.createElement('div');
  const div = document.createElement('div');
  div.style.height = '300px';
  div.style.width = '300px';
  div.style.overflow = 'scroll';
  div.style.border = '1px solid #ccc';
  div.style.padding = '1rem';
  div.style.boxSizing = 'border-box';

  const element = document.createElement('div');
  element.id = 'scroll-element';
  element.innerText = 'Scroll me into view!';
  element.style.display = 'inline-block';
  element.style.backgroundColor = '#b3e5ee';
  element.style.position = 'relative';
  element.style.left = '1000px';
  element.style.top = '700px';
  element.style.padding = '5px';

  div.appendChild(element);
  container.appendChild(div);
  return container;
}, `given I visit "http://localhost:8080" when I scroll to scroll-element then it should be visible done`);

appendSection('Select', () => {
  const container = document.createElement('div');
  const select = document.createElement('select');
  select.id = 'select1';
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');
  option1.value = '1';
  option1.innerText = 'Option 1';
  option2.value = '2';
  option2.innerText = 'Option 2';
  option3.value = '3';
  option3.innerText = 'Option 3';
  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  container.appendChild(select);

  const span = document.createElement('span');
  span.id = 'message6';
  span.innerText = 'Selected: ';
  container.appendChild(span);

  select.addEventListener('change', (evt) => {
    span.innerText = 'Selected: ' + evt.target.value;
  });

  return container;
}, `given I visit "http://localhost:8080" when I select "Option 2" in select1 then message6 should have text "Selected: 2" done`);

appendSection('Go back', () => {
  const container = document.createElement('div');
  const a = document.createElement('a');
  a.id = 'forward-link1';
  a.href = 'forward.html';
  a.innerText = 'Go to next page';
  container.appendChild(a);
  return container;
}, `given I visit "http://localhost:8080" when I click forward-link1 and I go back then home-header should exist done`);

appendSection('Go forward', () => {
  const container = document.createElement('div');
  const a = document.createElement('a');
  a.id = 'forward-link2';
  a.href = 'forward.html';
  a.innerText = 'Go to next page';
  container.appendChild(a);
  return container;
}, `given I visit "http://localhost:8080" when I click forward-link2 and I go back and I go forward then forward-header should exist done`);
