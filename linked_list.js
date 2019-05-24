this.insert = function (head, data) {
    if (head === null) {
        return new Node(data);
    }
    else if (head.next === null) {
        head.next = new Node(data);
    }
    else {
        this.insert(head.next, data);
    }
    return head;
}