# react-inbox
<h1>Google Style Email Client</h1>

Component Hierarchy

    An App component
    A Messages (or MessageList) component
    A Message component
    A Toolbar component

<h1>USER STORIES</h1>

<b>Message Display</b>
Users can see a list of messages with the correct styles

<b>When a user views the app</b>
Then they can see a list of messages with their subjects<br>
If the message is read, it has the read style<br>
If the message is unread, it shows as unread<br>
If the message is selected, it has the selected style and the box is checked<br>
If there are labels on a message, they will appear<br>
If the message is starred, then the star is filled in, otherwise it is empty<br>

<b>Starring</b><br>
Users are able to star and unstar a message.<br>
When a user clicks the star next to a message<br>
It toggles whether the message is starred or not<br>
For example if it was starred, and you clicked on it, it will become unstarred


<b>Selecting Individual Message</b><br>
Users should are able to select and deselect individual messages.<br>
When a user checks the checkbox on a message<br>
Thee message will be highlighted
When a user unchecks the checkbox on a message<br>
Then the message is not highlighted


<b>Bulk Select / Deselect</b><br>
Users is able to select and deselect messages.
Given that no messages are selected<br>
When a user checks the "Select All" checkbox<br>
Then it checks all messages (and highlight them)

Given star that some messages are selected<br>
When a user checks the "Select All" checkbox<br>
Then it checks all messages (and highlight them)

Given that all messages are selected<br>
When a user unchecks the "Select All" checkbox<br>
Then it unchecks all messages (and unhighlights them)

<b>Marking Messages as Read</b><br>
Users are able to mark messages as read.

When a user selects messages<br>
And presses "Mark As Read"<br>
Then each selected message will be marked as read<br>
And will no longer be bold

Marking Messages as Unread<br>
Users are be able to mark messages as unread.

When a user selects messages<br>
And presses "Mark As Unread"<br>
Then each selected message will be marked as unread<br>
And will appear bold

<b>Deleting Messages</b><br>
Users is able to delete selected messages

When a user selects messages<br>
And presses "Delete" (the Trash icon)<br>
Then each selected message is removed from the list<br>
And the unread count is updated<br>
And "Select All" button will update

<b>Adding Labels</b><br>
When a user selects messages from the sidebar<br>
And chooses a label from the "Add Label" dropdown<br>
Then that label will be added to all selected messages<br>
But if the message already contains the label then it will not be added twice

<b>When a user selects messages from the sidebar</b><br>
And chooses a label from the "Remove Label" dropdown<br>
Then that label will be removed from all of the selected messages that contain the label

NOTE: If you try to remove a label from a message that doesn't have that label, there will be no errors

<b>Unread Message Count</b><br>
Users can always see the number of unread messages 

When a user changes which messages are read / unread<br>
Then the unread count in the upper right-hand corner is updated<br>
And when there are 0 unread messages it displays "0 unread messages"<br>
And when there is 1 unread message it displays "1 unread message"<br>
And when there's more than 1 unread message it displays "# unread messages"<br>

<b>Select All Button State</b><br> 
Users should see the state of the select all button change as messages are selected

When no messages are checked then the "Select All" button is in the "unchecked" state

When some messages are checked then the "Select All" button is in the "half-checked" state

When all messages are checked then the "Select All" button is in the "checked" state


