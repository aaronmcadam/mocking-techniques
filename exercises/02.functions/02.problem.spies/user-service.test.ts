import { Logger } from './logger.js'
import { UserService } from './user-service.js'

test('logs out the "createUser" event when creating a new user', async () => {
  const logger = new Logger()

  // 🐨 Spy on the `logger.log` method using the `vi.spyOn()` API.
  // 💰 vi.spyOn(target, method)

  const service = new UserService(logger)

  await service.createUser({
    id: 'abc-123',
    name: 'John',
  })

  // 🐨 Write an assertion that `logger.log` has been called with the
  // "createUser" event and the { id: 'abc-123' } object as metadata.
  // 💰 expect(spy).toHaveBeenCalledWith(arg1, arg2)

  // 🐨 Write another assertion that `logger.log` has been called once.
  // 💰 expect(spy).toHaveBeenCalledOnce()
})
