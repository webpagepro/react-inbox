# react-inbox
<b>Google Style Email Client </b>

Component Hierarchy

    An App component
    A Messages (or MessageList) component
    A Message component
    A Toolbar component

<b>Stories</b>

Message Display:
Users can see a list of messages with the correct styles

When a user views the app
Then they can see a list of messages with their subjects
If the message is read, it has the read style
If the message is unread, it shows as unread
If the message is selected, it has the selected style and the box is checked
If there are labels on a message, they will appear
If the message is starred, then the star is filled in, otherwise it is empty

<b>Starring:</b>
Users are able to star and unstar a message.

When a user clicks the star next to a message
It toggles whether the message is starred or not
For example if it was starred, and you clicked on it, it will become unstarred


<b>Selecting Individual Message</b>
Users should are able to select and deselect individual messages.

When a user checks the checkbox on a message
Thee message will be highlighted

When a user unchecks the checkbox on a message
Then the message is not highlighted


<b>Bulk Select / Deselect</b>
Users is able to select and deselect messages.

Given that no messages are selected
When a user checks the "Select All" checkbox
Then it checks all messages (and highlight them)

Givenstar that some messages are selected
When a user checks the "Select All" checkbox
Then it checks all messages (and highlight them)

Given that all messages are selected
When a user unchecks the "Select All" checkbox
Then it unchecks all messages (and unhighlights them)

<b>Marking Messages as Read</b>
Users are able to mark messages as read.

When a user selects messages
And presses "Mark As Read"
Then each selected message will be marked as read
And will no longer be bold

Marking Messages as Unread
Users are be able to mark messages as unread.

When a user selects messages
And presses "Mark As Unread"
Then each selected message will be marked as unread
And will appear bold

<b>Deleting Messages</b>
Users is able to delete selected messages

When a user selects messages
And presses "Delete" (the Trash icon)
Then each selected message is removed from the list
And the unread count is updated
And "Select All" button will update

<b>Adding Labels</b>
When a user selects messages from the sidebar
And chooses a label from the "Add Label" dropdown
Then that label will be added to all selected messages
But if the message already contains the label then it will not be added twice

<b>When a user selects messages from the sidebar</b>
And chooses a label from the "Remove Label" dropdown
Then that label will be removed from all of the selected messages that contain the label

NOTE: If you try to remove a label from a message that doesn't have that label, there will be no errors

<b>Unread Message Count</b>
Users can always see the number of unread messages

When a user changes which messages are read / unread
Then the unread count in the upper right-hand corner is updated
And when there are 0 unread messages it displays "0 unread messages"
And when there is 1 unread message it displays "1 unread message"
And when there's more than 1 unread message it displays "# unread messages"

<b>Select All Button State</b>
Users should see the state of the select all button change as messages are selected

When no messages are checked
Then the "Select All" button is in the "unchecked" state

When some messages are checked
Then the "Select All" button is in the "half-checked" state

When all messages are checked
Then the "Select All" button is in the "checked" state


