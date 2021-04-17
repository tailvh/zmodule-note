require('./zmodel')
G.zrouter.registerController('/note', G.zparent.zcontrol.Mount(G.zparent.zservice.Mount(G.zm.Note)))
