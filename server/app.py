from flask import Flask, request, jsonify
from flask_cors import CORS  # Importação do CORS
import sqlite3

app = Flask(__name__)
CORS(app)

def init_db():
    with sqlite3.connect("database.db") as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS LIVROS (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT NOT NULL,
                categoria TEXT NOT NULL,
                autor TEXT NOT NULL,
                imagem_url TEXT NOT NULL
            )
        ''')
        conn.commit()

@app.route('/')
def home():
    return "Bem-vindo à API de Livros! Doe e explore livros disponíveis."

@app.route('/doar', methods=['POST'])
def doar_livro():
    data = request.get_json()
    if not all(key in data for key in ("titulo", "categoria", "autor", "imagem_url")):
        return jsonify({"erro": "Todos os campos são obrigatórios."}), 400
    
    with sqlite3.connect("database.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO LIVROS (titulo, categoria, autor, imagem_url)
            VALUES (?, ?, ?, ?)
        """, (data["titulo"], data["categoria"], data["autor"], data["imagem_url"]))
        conn.commit()
    
    return jsonify({"mensagem": "Livro cadastrado com sucesso!"}), 201

@app.route('/livros', methods=['GET'])
def listar_livros():
    with sqlite3.connect("database.db") as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM LIVROS")
        livros = [
            {"id": row[0], "titulo": row[1], "categoria": row[2], "autor": row[3], "imagem_url": row[4]}
            for row in cursor.fetchall()
        ]
    return jsonify(livros)

if __name__ == '__main__':
    init_db()
    app.run(debug=True)