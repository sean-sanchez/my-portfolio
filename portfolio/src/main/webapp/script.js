// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fact to the page.
 */
function addRandomFact() {
  const facts = [
      'I was born on April 24th, 2000.',
      'I learned Spanish before I learned English.',
      'I have not cut the length of my hair since I graduated high school two years ago.', 
      'I was named after Sean Connery, but I do not believe I have ever seen any of his movies.',
  ];

  // Pick a random fact.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.querySelector('#fact-container');
  factContainer.innerText = fact;
}

/**
 * Fetches a message from the server
 */
async function getMessage(){
  const response = await fetch('/data');
  const message = await response.text();
  document.querySelector('#message-container').innerText = message;
}
