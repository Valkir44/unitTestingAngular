import {MessageService} from './message.service';

describe('messageService', () => {
   let service: MessageService;

   beforeEach(() => {
       service = new MessageService();
   });

   it('should not have any message to start', () => {
       expect(service.messages.length).toBe(0);
   });

    it('should add a message when add is called', () => {
        service.add('testAdding');

        expect(service.messages.length).toBe(1);
    });

    it('should remove all messages when clear is called', () => {
        service.add('testAdding');

        service.clear();

        expect(service.messages.length).toBe(0);
    });
});