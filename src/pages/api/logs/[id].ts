import type { NextApiRequest, NextApiResponse } from 'next'

export type Log = {
  id: string
  message: string
}

// API のレスポンス型
export type LogsApiResponse = {
  log?: Log
  debugMessage?: string
}

// API のエントリポイント
export default function logsApi(
  req: NextApiRequest,
  res: NextApiResponse<LogsApiResponse>
): void {
  const id = req.query.id as string
  const log = fetchLogsData(id)
  if (log) {
    res.status(200).json({ log })
  } else {
    res.status(400).json({ debugMessage: `Log [id=${id}] not found` })
  }
}

// 擬似的なデータフェッチ関数
function fetchLogsData(id: string): Log | undefined {
  const logs: Log[] = [
    { id: '1', message: 'test1' },
    { id: '2', message: 'test2' },
    { id: '3', message: 'test3' },
  ]
  return logs.find((log) => log.id === id)
}
