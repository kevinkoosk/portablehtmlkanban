function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.currentTarget.appendChild(document.getElementById(data));
        }

        function createTask(){
            var x = document.getElementById("inprogress");
            var y = document.getElementById("done");
            var z = document.getElementById("create-new-task-block");
            if (x.style.display === "none") {
                x.style.display = "block";
                y.style.display = "block";
                z.style.display = "none";
            } else {
                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "flex";
            }
        }

        function saveTask(){
            // var saveButton = document.getElementById("save-button");
            // var editButton = document.getElementById("edit-button");
            // if (saveButton.style.display === "none") {
            //     saveButton.style.display = "block";
            //     editButton.style.display = "none";
            // } else{
            //     saveButton.style.display = "none";
            //     editButton.style.display = "block";
            // }

            var todo = document.getElementById("todo");
            var taskName = document.getElementById("task-name").value;
            todo.innerHTML += `
            <div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
                <span>${taskName}</span>
            </div>
            `
        }

        function editTask(){
            var saveButton = document.getElementById("save-button");
            var editButton = document.getElementById("edit-button");
            if (saveButton.style.display === "none") {
                saveButton.style.display = "block";
                editButton.style.display = "none";
            } else{
                saveButton.style.display = "none";
                editButton.style.display = "block";
            }
        }
        
function exportHTML() {
  // Get the updated HTML content
  var updatedHTML = document.documentElement.outerHTML;

  // Create a modal popup
  var modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.background = 'rgba(0, 0, 0, 0.5)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';

  // Create a text area to display the HTML content
  var textarea = document.createElement('textarea');
  textarea.style.width = '80%';
  textarea.style.height = '80%';
  textarea.style.padding = '10px';
  textarea.style.background = 'white';
  textarea.style.fontFamily = 'monospace';
  textarea.style.fontSize = '14px';
  textarea.value = updatedHTML;

  // Create a close button for the modal
  var closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.padding = '10px';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', function() {
    document.body.removeChild(modal);
  });

  // Add the textarea and close button to the modal
  modal.appendChild(textarea);
  modal.appendChild(closeButton);

  // Add the modal to the document body
  document.body.appendChild(modal);
}

function deleteTask(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var deletedElement = document.getElementById(data);
  deletedElement.parentNode.removeChild(deletedElement);
}

function saveTask() {
  var todo = document.getElementById("todo");
  var taskName = document.getElementById("task-name").value;
  var taskDescription = document.getElementById("task-description").value;
  var taskId = taskName.toLowerCase().split(" ").join("");

  todo.innerHTML += `
    <div class="task" id="${taskId}" draggable="true" ondragstart="drag(event)" ondblclick="showDescriptionModal(this)" task-description="${taskDescription}">
      <span>${taskName}</span>
      <div class="task-description" id="${taskId}-description">${taskDescription}</div>
    </div>
  `;
}

function showDescriptionModal(task) {
  var taskDescription = task.getAttribute('task-description');

  // Create a modal popup
  var modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.background = 'rgba(0, 0, 0, 0.5)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';

  // Create a description container
  var descriptionContainer = document.createElement('div');
  descriptionContainer.style.width = '80%';
  descriptionContainer.style.height = '80%';
  descriptionContainer.style.padding = '10px';
  descriptionContainer.style.background = 'white';
  descriptionContainer.style.fontFamily = 'monospace';
  descriptionContainer.style.fontSize = '14px';
  descriptionContainer.textContent = taskDescription;

  // Create a close button for the modal
  var closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.padding = '10px';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', function() {
    document.body.removeChild(modal);
  });

  // Add the description container and close button to the modal
  modal.appendChild(descriptionContainer);
  modal.appendChild(closeButton);

  // Add the modal to the document body
  document.body.appendChild(modal);
}

