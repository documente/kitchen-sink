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

# Be hidden
hidden-div: '#hidden-div'

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

const env = `
basePath: http://localhost:8080`;

const testRunner = new CypressRunner(selectorTree, {}, env);


describe('specs from index.js', () => {
  it('spec #1', () => {
    testRunner.run(`
When I visit "{{basePath}}/forward.html"
      then forward-header should exist`);
  });

  it('spec #2', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I click button1
  then message1 should be visible`);
  });

  it('spec #3', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I double-click button2
  then message2 should be visible`);
  });

  it('spec #4', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I right-click button3
  then message3 should be visible`);
  });

  it('spec #5', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I type "Some text" into input1
  then it should have value "Some text"`);
  });

  it('spec #6', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I clear input2
  then it should have value ""`);
  });

  it('spec #7', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I check checkbox1
  then message4 should have text "Checked"`);
  });

  it('spec #8', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I uncheck checkbox2
  then message5 should have text "Unchecked"`);
  });

  it('spec #9', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I scroll to scroll-element
  then it should be visible`);
  });

  it('spec #10', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I select "Option 2" in select1
  then message6 should have text "Selected: 2"`);
  });

  it('spec #11', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I click forward-link1
  and I go back
  then home-header should exist`);
  });

  it('spec #12', () => {
    testRunner.run(`
Given I visit "{{basePath}}"
  when I click forward-link2
  and I go back
  and I go forward
  then forward-header should exist`);
  });

  it('spec #13', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then span1 should have text "Hello, Documenté!"`);
  });

  it('spec #14', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then div1 should be visible`);
  });

  it('spec #15', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then hidden-div should be hidden`);
  });

  it('spec #16', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then div2 should contain text "Hello, Documenté!"`);
  });

  it('spec #17', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then input3 should have value "Hello, Documenté!"`);
  });

  it('spec #18', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then div3 should have class "foo"`);
  });

  it('spec #19', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then div4 should exist`);
  });

  it('spec #20', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then non-existent element should not exist`);
  });

  it('spec #21', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then checkbox3 should be checked`);
  });

  it('spec #22', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then checkbox4 should be unchecked`);
  });

  it('spec #23', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then input4 should be disabled`);
  });

  it('spec #24', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then input5 should be enabled`);
  });

  it('spec #25', () => {
    testRunner.run(`
When I visit "{{basePath}}"
  then multi-element should have 4 occurrences`);
  });

});
