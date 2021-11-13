/**
 * Definition for singly-linked list.
 * */
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


function intersection(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(fast === slow) return slow
    }
    return null
}


function detectCycle(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return null

    let intersect = intersection(head)
    let start = head

    while(intersect !== start){
        if(!intersect) return null
        start = start.next
        intersect = intersect.next
    }


    return start

};