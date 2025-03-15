import asyncio

class Cache:
    def __init__(self):
        self.cache = {}
        self.cache_lock = asyncio.Lock()

    async def get(self, key: str):
        await asyncio.sleep(2)  # delay
        async with self.cache_lock:
            return self.cache.get(key)

    async def set(self, key: str, value: str):
        await asyncio.sleep(2)  # delay
        async with self.cache_lock:
            self.cache[key] = value
