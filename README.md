# react-inbox
<b>Google Style Email Client </b>

Component Hierarchy

    An App component
    A Messages (or MessageList) component
    A Message component
    A Toolbar component

Stories:

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


Selecting Individual Messages:
Users should are able to select and deselect individual messages.

When a user checks the checkbox on a message
Thee message will be highlighted

When a user unchecks the checkbox on a message
Then the message is not highlighted


Bulk Select / Deselect:
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

Marking Messages as Read:
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

Deleting Messages
Users is able to delete selected messages

When a user selects messages
And presses "Delete" (the Trash icon)
Then each selected message is removed from the list
And the unread count is updated
And "Select All" button will update

Adding Labels
When a user selects messages from the sidebar
And chooses a label from the "Add Label" dropdown
Then that label will be added to all selected messages
But if the message already contains the label then it will not be added twice

When a user selects messages from the sidebar
And chooses a label from the "Remove Label" dropdown
Then that label will be removed from all of the selected messages that contain the label

NOTE: If you try to remove a label from a message that doesn't have that label, there will be no errors

Unread Message Count
Users can always see the number of unread messages

When a user changes which messages are read / unread
Then the unread count in the upper right-hand corner is updated
And when there are 0 unread messages it displays "0 unread messages"
And when there is 1 unread message it displays "1 unread message"
And when there's more than 1 unread message it displays "# unread messages"

Select All Button State
Users should see the state of the select all button change as messages are selected

When no messages are checked
Then the "Select All" button is in the "unchecked" state

When some messages are checked
Then the "Select All" button is in the "half-checked" state

When all messages are checked
Then the "Select All" button is in the "checked" state

NOTE: the "Select All" button must stay in sync at all times.

Select All Button State
Users is not be able to click on toolbar items when no messages are selected
Load the messages from the server

When a user goes to your inbox app
The messages they see are the ones loaded from the server

Actions should update the server-side

When a user stars or unstars a message
And then reloads the page
They should see that the data has been persisted

When a user marks messages read or unread
Or deletes messages
Or adds or removes labels
And then refreshes the page
Then they should see that the data has been persisted

    NOTE: the server-side API you are running locally runs in memory, so if you restart it, the data will reset.

Add the ability to compose messages
When a user goes to the app
They should see a red plus button
And when they click that button
Then a compose form should appear
And when they fill out the subject and body and press Send
Then the compose form should go away
And the message should appear on the page
And when they refresh, the message should still appear (it's persisted on the server)

When a user opens the compose form
And then presses the red compose button
Then the compose form should close

It should look like this:

You can get the HTML for this in the Styleguide.
