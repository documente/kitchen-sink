import { CypressRunner } from '@documente/documente';

const selectorTree = `
# Click
button1: '#button1'
message1: '#message1'

# Double-click
button2: '#button2'
message2: '#message2'

# Right-click
button3: '#button3'
message3: '#message3'

# Type
input1: '#input1'

# Clear
input2: '#input2'

# Check
checkbox1: '#checkbox1'
message4: '#message4'

# Uncheck
checkbox2: '#checkbox2'
message5: '#message5'

# Scroll
scroll-element: '#scroll-element'

# Select
select1: '#select1'
message6: '#message6'

# Go back
forward-link1: '#forward-link1'
home-header: '#home-header'

# Go forward
forward-link2: '#forward-link2'
forward-header: '#forward-header'

# Have text
span1: '#span1'

# Be visible
div1: '#div1'

# Contain text
div2: '#div2'

# Have value
input3: '#input3'

# Have class
div3: '#div3'

# Exist
div4: '#div4'

# Not exist
non-existent element: '#nonExistentElement'

# Be checked
checkbox3: '#checkbox3'

# Be unchecked
checkbox4: '#checkbox4'

# Be disabled
input4: '#input4'

# Be enabled
input5: '#input5'

# Have occurrences
multi-element: '.multi-element'
`;

const testRunner = new CypressRunner(selectorTree, {});


describe('specs from index.js', () => {
  it('spec #1', () => {
    testRunner.run(`
when I visit "http://localhost:8080/forward.html" then forward-header should exist done`);
  });

  it('spec #2', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I click button1 then message1 should be visible done`);
  });

  it('spec #3', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I double-click button2 then message2 should be visible done`);
  });

  it('spec #4', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I right-click button3 then message3 should be visible done`);
  });

  it('spec #5', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I type "Some text" into input1 then it should have value "Some text" done`);
  });

  it('spec #6', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I clear input2 then it should have value "" done`);
  });

  it('spec #7', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I check checkbox1 then message4 should have text "Checked" done`);
  });

  it('spec #8', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I uncheck checkbox2 then message5 should have text "Unchecked" done`);
  });

  it('spec #9', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I scroll to scroll-element then it should be visible done`);
  });

  it('spec #10', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I select "Option 2" in select1 then message6 should have text "Selected: 2" done`);
  });

  it('spec #11', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I click forward-link1 and I go back then home-header should exist done`);
  });

  it('spec #12', () => {
    testRunner.run(`
given I visit "http://localhost:8080" when I click forward-link2 and I go back and I go forward then forward-header should exist done`);
  });

  it('spec #13', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then span1 should have text "Hello, Documenté!" done`);
  });

  it('spec #14', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then div1 should be visible done`);
  });

  it('spec #15', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then div2 should contain text "Hello, Documenté!" done`);
  });

  it('spec #16', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then input3 should have value "Hello, Documenté!" done`);
  });

  it('spec #17', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then div3 should have class "foo" done`);
  });

  it('spec #18', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then div4 should exist done`);
  });

  it('spec #19', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then non-existent element should not exist done`);
  });

  it('spec #20', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then checkbox3 should be checked done`);
  });

  it('spec #21', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then checkbox4 should be unchecked done`);
  });

  it('spec #22', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then input4 should be disabled done`);
  });

  it('spec #23', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then input5 should be enabled done`);
  });

  it('spec #24', () => {
    testRunner.run(`
when I visit "http://localhost:8080" then multi-element should have 4 occurrences done`);
  });

});
